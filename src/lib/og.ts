import { defaultOGLogo, ogBaseURL } from '@/constants/urls';

// TODO: conditionally optional type check
type OpenGraphType =
  | {
      ogType: 'gradient' | 'general';
      siteName: string;
      description: string;
      logo?: string;
      logoWidth?: number;
      logoHeight?: number;

      articleType?: 'projects' | 'blog' | 'snippets';
      banner?: string;
      templateTitle?: string;

      theme?: 'dark' | 'light';
    }
  | {
      ogType: 'article';
      articleType: 'projects' | 'blog' | 'snippets';
      banner: string;
      templateTitle: string;

      siteName?: string;
      description?: string;
      logo?: string;
      logoWidth?: number;
      logoHeight?: number;

      theme?: 'dark' | 'light';
    };
/**
 * Generate an Open Graph meta tag image url for the given options.
 *
 * @param siteName - The name of the website or page.
 * @param description - The description of the website or page.
 * @param logo - The URL of the logo to use for the Open Graph meta tag. /the URL of the logo to use (optional, default is the website's logo)
 * @param logoWidth - The width of the logo. @default 250
 * @param logoHeight - The height of the logo. @default 250
 * @param ogType - The type of Open Graph object to generate. for example "gradient" or "general" or "article"
 * @param articleType - the type of article (e.g. "projects", "blog", or "snippets")
 * @param banner - The banner image to use for the Open Graph object.
 * @param templateTitle - The template title to use for the Open Graph object.
 * @param theme - The theme to use for the Open Graph object.
 * @returns The generated Open Graph meta tag image url.
 */
export function og({
  siteName = 'Jakeer Website',
  description = 'Site description',
  templateTitle = 'Default template title for the Open Graph',
  logo = defaultOGLogo,
  banner = '',
  logoWidth = 250,
  logoHeight = 250,
  theme = 'dark',
  ogType = 'general',
  articleType,
}: OpenGraphType): string {
  const encodedLogo = encodeURIComponent(logo);
  const encodedSiteName = encodeURIComponent(siteName.trim());
  const encodedTemplateTitle = encodeURIComponent(templateTitle.trim());

  const encodedDesc = encodeURIComponent(description.trim());
  const encodedBanner = encodeURIComponent(banner.trim());
  if (ogType === 'general' || ogType === 'gradient') {
    return `${ogBaseURL}/api/${ogType}?siteName=${encodedSiteName}&description=${encodedDesc}&logo=${encodedLogo}&Width=${logoWidth}&Height=${logoHeight}&theme=${theme}`;
  }
  return `${ogBaseURL}/api/${ogType}?articleType=${articleType}&banner=${encodedBanner}&templateTitle=${encodedTemplateTitle}&theme=${theme}`;
}
