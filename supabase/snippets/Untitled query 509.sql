insert into content_model (uuid, entry_name, fields, created_at, last_updated)
values (
  'localizationToken',
  'Localization Token',
  '[
    {"id":"key","name":"Key","type":"Symbol","localized":false,"required":true,"validations":[{"unique":true}],"disabled":false,"omitted":false},
    {"id":"value","name":"Value","type":"Text","localized":true,"required":true,"validations":[],"disabled":false,"omitted":false}
  ]'::jsonb,
  '2026-05-28',
  '2026-05-28'
);

insert into content_entry (model_uuid, fields)
values (
  'localizationToken',
  '{"key": "button.submit", "value": {"en-US": "Submit", "fr-FR": "Soumettre"}}'::jsonb
);