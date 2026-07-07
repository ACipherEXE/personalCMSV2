create unique index idx_content_entry_unique_key
on content_entry ((fields->>'key'))
where model_uuid = 'localizationToken';