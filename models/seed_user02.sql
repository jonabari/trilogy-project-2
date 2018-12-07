INSERT INTO users (
  email, 
  password, 
  names, 
  lastnames, 
  qr
) VALUES (
  'user02@example.com',
  '4321dcba',
  'Jack',
  'Daniels',
  'data:image/png;base64,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'
);