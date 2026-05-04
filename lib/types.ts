export type Tier = "basic" | "paid" | "featured"

export interface Category {
  id: string
  slug: string
  label: string
  description: string | null
  active: boolean
  sort_order: number
  created_at: string
  vendor_count?: number
}

export interface Vendor {
  id: string
  category_id: string
  subcategory_id: string | null
  slug: string
  name: string
  address: string | null
  city: string
  state: string
  zip: string | null
  phone: string | null
  website: string | null
  email: string | null
  description: string | null
  description_override: string | null
  tier: Tier
  claimed: boolean
  claimed_by: string | null
  claimed_at: string | null
  verified: boolean
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  promo_label: string | null
  promo_expires_at: string | null
  meta_title: string | null
  meta_description: string | null
  lat: number | null
  lng: number | null
  active: boolean
  created_at: string
  updated_at: string
  category_slug?: string
  category_label?: string
}

export interface VendorPhoto {
  id: string
  vendor_id: string
  r2_url: string
  alt_text: string | null
  is_primary: boolean
  sort_order: number
  uploaded_at: string
}

export interface Tag {
  id: string
  slug: string
  label: string
}
