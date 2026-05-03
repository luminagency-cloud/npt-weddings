INSERT INTO categories (slug, label, description, sort_order) VALUES
  ('venues', 'Venues', 'Wedding venues and event spaces in Newport County', 1),
  ('photographers', 'Photographers', 'Wedding photographers serving Newport and surrounding areas', 2),
  ('florists', 'Florists', 'Floral designers and florists for Newport weddings', 3),
  ('caterers', 'Caterers', 'Catering services for Newport weddings and events', 4),
  ('jewelers', 'Jewelers', 'Engagement rings and wedding bands in Newport County', 5),
  ('music', 'Music & Entertainment', 'Bands, DJs, and entertainment for Newport weddings', 6),
  ('hair-makeup', 'Hair & Makeup', 'Bridal hair and makeup artists in Newport', 7),
  ('officiants', 'Officiants', 'Wedding officiants and ceremony services in Newport', 8),
  ('planners', 'Planners', 'Wedding planners and coordinators serving Newport and surrounding areas', 9),
  ('videographers', 'Videographers', 'Wedding videographers and filmmakers serving Newport and surrounding areas', 10),
  ('transportation', 'Transportation', 'Wedding transportation, guest shuttles, and trolleys serving Newport', 11),
  ('bakers', 'Bakers', 'Wedding cake designers and bakeries serving Newport and surrounding areas', 12);

INSERT INTO vendors (category_id, slug, name, address, city, state, zip, phone, website, description, tier) VALUES
  ((SELECT id FROM categories WHERE slug = 'venues'), 'rosecliff-mansion-newport', 'Rosecliff Mansion', '548 Bellevue Ave', 'Newport', 'RI', '02840', '(401) 847-1000', 'https://www.newportmansions.org/rosecliff', 'One of Newport''s most iconic Gilded Age mansions. The grand ballroom and terraced gardens make Rosecliff a breathtaking backdrop for weddings.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'venues'), 'castle-hill-inn-newport', 'Castle Hill Inn', '590 Ocean Ave', 'Newport', 'RI', '02840', '(401) 849-3800', 'https://www.castlehillinn.com', 'A historic inn perched on a private peninsula with sweeping views of Narragansett Bay. Castle Hill offers intimate ceremonies and elegant receptions.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'venues'), 'vanderbilt-grace-newport', 'Vanderbilt Grace', '41 Mary St', 'Newport', 'RI', '02840', '(401) 846-6200', 'https://www.vanderbiltgrace.com', 'A boutique luxury hotel in the heart of Newport, occupying a restored Gilded Age mansion. Intimate weddings with five-star service.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'photographers'), 'kate-preftakes-photography', 'Kate Preftakes Photography', NULL, 'Newport', 'RI', '02840', NULL, 'https://www.katepreftakes.com', 'Newport-based wedding photographer known for bright, timeless images. Specializes in outdoor ceremonies and seaside locations across Rhode Island.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'photographers'), 'sarah-bode-clark-photography', 'Sarah Bode Clark Photography', NULL, 'Newport', 'RI', '02840', NULL, 'https://www.sarahbodeclark.com', 'Documentary-style wedding photography capturing candid moments and genuine emotion. Based in Newport, available throughout New England.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'florists'), 'flowers-on-broadway-newport', 'Flowers on Broadway', '20 Broadway', 'Newport', 'RI', '02840', '(401) 846-4440', NULL, 'Full-service florist in downtown Newport specializing in bridal arrangements, ceremony decor, and reception centerpieces.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'jewelers'), 'albert-arts-jewelers-newport', 'Albert Arts Jewelers', '181 Thames St', 'Newport', 'RI', '02840', '(401) 849-9494', 'https://www.albertarts.com', 'Newport''s premier custom jeweler since 1986. Specializing in engagement rings, custom wedding bands, and estate jewelry.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'jewelers'), 'tiffany-co-newport', 'Tiffany & Co.', '140 Bellevue Ave', 'Newport', 'RI', '02840', '(401) 847-2650', 'https://www.tiffany.com', 'The iconic Tiffany & Co. boutique on Bellevue Avenue, offering engagement rings, wedding bands, and bridal gifts.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'caterers'), 'fathoms-catering-newport', 'Fathoms Catering', NULL, 'Newport', 'RI', '02840', '(401) 619-2200', NULL, 'Newport-based full-service catering company specializing in locally sourced seafood and New England cuisine for weddings and private events.', 'basic'),
  ((SELECT id FROM categories WHERE slug = 'music'), 'rhode-island-wedding-dj', 'Rhode Island Wedding DJ', NULL, 'Newport', 'RI', '02840', '(401) 555-0100', NULL, 'Professional DJ services for Newport weddings. Specializing in ceremony music, cocktail hour, and reception entertainment.', 'basic');
