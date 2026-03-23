export interface Consultant {
  id: string
  auth_user_id: string
  email: string
  name: string
  slug: string
  bio?: string
  profile_photo_url?: string
  phone?: string
  location?: string
  timezone: string
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  consultant_id: string
  name: string
  description?: string
  price_kes: number
  duration_minutes: number
  icon_type?: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Availability {
  id: string
  consultant_id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_active: boolean
  created_at: string
}

export interface Booking {
  id: string
  consultant_id: string
  service_id: string
  client_name: string
  client_email: string
  client_phone: string
  booking_date: string
  booking_time: string
  notes?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
  updated_at: string
  service?: Service
}

export interface Payment {
  id: string
  booking_id: string
  amount_kes: number
  pesapal_order_id: string
  status: 'pending' | 'completed' | 'failed'
  webhook_data?: Record<string, unknown>
  created_at: string
  confirmed_at?: string
}
