import { isClient, isDesktop, isMobile } from 'nucleify'
import * as images from '.'

export function initNucGlobals() {
  if (typeof window !== 'undefined') {
    const prefix = process.env.NODE_ENV === 'production' ? '' : (process.env.NEXT_PUBLIC_APP_URL || '');

    (window as any).isClient = isClient;
    (window as any).isMobile = isMobile;
    (window as any).isDesktop = isDesktop;

    (window as any).nucImages = {
      imgUrl: prefix + images.imgUrl,
      contributorsImgUrl: prefix + images.contributorsImgUrl,
      storysetImgUrl: prefix + images.storysetImgUrl,
      storysetAboutImgUrl: prefix + images.storysetAboutImgUrl,
      storysetServicesImgUrl: prefix + images.storysetServicesImgUrl,
      storysetBlogImgUrl: prefix + images.storysetBlogImgUrl,
      technologiesImgUrl: prefix + images.technologiesImgUrl,
    };
  }
}