CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,        
  model VARCHAR(100) NOT NULL,        
  year INTEGER NOT NULL,              
  vehicle_type VARCHAR(50) NOT NULL,  
  transmission VARCHAR(50) NOT NULL, 
  fuel_type VARCHAR(50) NOT NULL,    
  seats INTEGER NOT NULL,            
  price_per_day NUMERIC(8,2) NOT NULL,
  image_url TEXT,                     
  features TEXT[],                    
  available BOOLEAN DEFAULT TRUE,     
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  driver_license_number VARCHAR(50),  
  date_of_birth DATE,
  address TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,
  start_date DATE NOT NULL,           
  end_date DATE NOT NULL,            
  total_price NUMERIC(10,2) NOT NULL, 
  status VARCHAR(20) DEFAULT 'pending' CHECK (
    status IN ('pending', 'confirmed', 'active', 'completed', 'cancelled')
  ),
  payment_status VARCHAR(20) DEFAULT 'unpaid' CHECK (
    payment_status IN ('unpaid', 'paid', 'refunded')
  ),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,
  booking_id INTEGER REFERENCES bookings(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,         
  address TEXT NOT NULL,
  city VARCHAR(50) NOT NULL,
  operating_hours TEXT,               
  contact_phone VARCHAR(20)
);


-- cars readonly
CREATE POLICY "Public read access for cars"
ON cars
FOR SELECT
TO public
USING (true);

-- Cho phép user xem booking của chính mình
CREATE POLICY "User can view their bookings"
ON bookings
FOR SELECT
USING (auth.uid() = user_id);

-- Cho phép user tạo booking mới
CREATE POLICY "User can create bookings"
ON bookings
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Cho phép user hủy booking
CREATE POLICY "User can cancel bookings"
ON bookings
FOR UPDATE
USING (
  auth.uid() = user_id AND 
  status = 'pending' -- Chỉ cho hủy khi ở trạng thái pending
)
WITH CHECK (status = 'cancelled');

-- Cho phép user xem profile của chính mình
CREATE POLICY "User can view own profile"
ON profiles
FOR SELECT
USING (auth.uid() = user_id);

-- Cho phép user cập nhật profile của mình
CREATE POLICY "User can update own profile"
ON profiles
FOR UPDATE
USING (auth.uid() = user_id);

-- Cho phép user xem đánh giá của mình
CREATE POLICY "User can view their reviews"
ON reviews
FOR SELECT
USING (auth.uid() = user_id);

-- Cho phép user tạo đánh giá mới
CREATE POLICY "User can create reviews"
ON reviews
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Tạo function kiểm tra admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE id = auth.uid() AND role = 'admin' OR email = 'admin@gmail.com'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- POLICY CHO ADMIN (FULL CRUD)
-- Cars
CREATE POLICY "Admin full access to cars" ON cars
FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- Profiles
CREATE POLICY "Admin full access to profiles" ON profiles
FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- Bookings
CREATE POLICY "Admin full access to bookings" ON bookings
FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- Reviews
CREATE POLICY "Admin full access to reviews" ON reviews
FOR ALL USING (is_admin()) WITH CHECK (is_admin());

-- Locations
CREATE POLICY "Admin full access to locations" ON locations
FOR ALL USING (is_admin()) WITH CHECK (is_admin());

UPDATE auth.users 
SET role = 'admin' 
WHERE email = 'admin@gmail.com';

-- Function tạo profile tự động khi có user mới
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, phone)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'phone', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger kích hoạt khi có user mới
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = ''
AS $$
DECLARE
    user_id uuid := (SELECT auth.uid()); -- Get the current user's ID
    is_admin boolean;
BEGIN
    -- Check if the user is an admin by querying the profiles table
    SELECT EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE user_id = user_id AND role = 'admin'
    ) INTO is_admin;

    RETURN is_admin;
END;
$$;