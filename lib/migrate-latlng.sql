-- Migration: add lat/lng columns to vendors table
-- Safe to run on existing databases; schema.sql already includes these columns
-- for fresh installs.

ALTER TABLE vendors
  ADD COLUMN IF NOT EXISTS lat NUMERIC(10, 7),
  ADD COLUMN IF NOT EXISTS lng NUMERIC(10, 7);
