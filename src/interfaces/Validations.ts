// Generated with AI 
/**
 * Represents a single validation rule for a Contentful field.
 * This is a union type covering all possible validation structures.
 */
export type ContentfulFieldValidation =
  | UniqueValidation
  | SizeValidation
  | LengthValidation
  | RegexValidation
  | InValidation
  | RangeValidation
  | DateRangeValidation
  | LinkMimeTypeGroupValidation
  | AssetFileSizeValidation
  | AssetImageDimensionsValidation
  | LinkContentTypeValidation
  | RichTextValidation;

  

/**
 * Common properties for validation messages.
 */
interface ValidationWithMessage {
  message?: string; // Custom error message
}

/**
 * 1. Unique Validation
 * Applies to: All field types
 */
export interface UniqueValidation {
  unique: true;
}

/**
 * 2. Size Validation (for Array fields)
 * Applies to: Array fields
 */
export interface SizeValidation extends ValidationWithMessage {
  size: {
    min?: number;
    max?: number;
  };
}

/**
 * 3. Length Validation (for Text/Symbol fields)
 * Applies to: Symbol, Text fields
 */
export interface LengthValidation extends ValidationWithMessage {
  maxLength?: {
    value: number;
    message?: string;
  };
  minLength?: {
    value: number;
    message?: string;
  };
}

/**
 * 4. Regular Expression Validation
 * Applies to: Symbol, Text fields
 */
export interface RegexValidation extends ValidationWithMessage {
  regexp: {
    pattern: string; // The regular expression pattern
    flags?: string; // Regex flags, e.g., "i" for case-insensitive
  };
}

/**
 * 5. Predefined Values (In Validation)
 * Applies to: Symbol, Array of Symbol fields
 */
export interface InValidation {
  in: string[]; // Array of allowed values
}

/**
 * 6. Range Validation (for Number fields)
 * Applies to: Number fields
 */
export interface RangeValidation extends ValidationWithMessage {
  range: {
    min?: number;
    max?: number;
  };
}

/**
 * 7. Date Range Validation (for Date fields)
 * Applies to: Date fields
 */
export interface DateRangeValidation extends ValidationWithMessage {
  dateRange: {
    min?: string; // ISO 8601 date string
    max?: string; // ISO 8601 date string
  };
}

/**
 * 8. Link Mime Type Group Validation (for Media Link fields)
 * Applies to: Link (Asset) fields
 */
export interface LinkMimeTypeGroupValidation {
  linkMimeTypeGroup: (
    | "image"
    | "video"
    | "audio"
    | "richtext"
    | "spreadsheet"
    | "pdf"
    | "archive"
    | "presentation"
    | "document"
  )[];
}

/**
 * 9. Asset File Size Validation (for Media Link fields)
 * Applies to: Link (Asset) fields
 */
export interface AssetFileSizeValidation extends ValidationWithMessage {
  assetFileSize: {
    min?: number; // Size in bytes
    max?: number; // Size in bytes
  };
}

/**
 * 10. Asset Image Dimensions Validation (for Media Link fields - images only)
 * Applies to: Link (Asset) fields (where linkMimeTypeGroup includes "image")
 */
export interface AssetImageDimensionsValidation extends ValidationWithMessage {
  assetImageDimensions: {
    width?: {
      min?: number;
      max?: number;
    };
    height?: {
      min?: number;
      max?: number;
    };
  };
}

/**
 * 11. Link Content Type Validation (for Entry Link fields)
 * Applies to: Link (Entry), Array of Link (Entry) fields
 */
export interface LinkContentTypeValidation {
  linkContentType: string[]; // Array of Content Type IDs
}

/**
 * 12. Rich Text Validations
 * Applies to: RichText fields
 */
export interface RichTextValidation {
  enabledNodeTypes?: (
    | "paragraph"
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "blockquote"
    | "hr"
    | "embedded-entry-block"
    | "embedded-asset-block"
    | "unordered-list"
    | "ordered-list"
    | "table"
    | "table-row"
    | "table-header-cell"
    | "table-cell"
  )[];
  enabledMarks?: ("bold" | "italic" | "underline" | "code" | "superscript" | "subscript")[];
  nodes?: {
    "embedded-entry-block"?: RichTextNodeValidation[];
    "embedded-asset-block"?: RichTextNodeValidation[];
    // Other node types could technically have validations, but these are most common for embedding
  };
}

export interface RichTextNodeValidation {
  linkContentType?: string[]; // For embedded entry blocks, restricts which content types can be embedded
  assetMimeTypes?: string[]; // For embedded asset blocks, restricts mime types (e.g., ["image/jpeg"])
  // Other potential validations for specific embedded nodes
}

// Example of how a field's `validations` property would look:
// const myFieldValidations: ContentfulFieldValidation[] = [
//   { unique: true },
//   { maxLength: { value: 100, message: "Too long!" } },
//   { regexp: { pattern: "^[a-zA-Z0-9-]+$" } },
//   { in: ["Option A", "Option B"] },
//   { linkContentType: ["myContentTypeId"] },
//   {
//     nodes: {
//       "embedded-entry-block": [{ linkContentType: ["blogPost", "author"] }],
//       "embedded-asset-block": [{ assetMimeTypes: ["image/jpeg", "image/png"] }]
//     }
//   }
// ];