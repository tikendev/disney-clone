const images = import.meta.glob('/src/assets/images/hero-slider/images/*.{jpg,jpeg,png}', { eager: true }) as Record<string, { default: string }>;
export const imagePaths = Object.values(images).map(img => img.default);

const titles = import.meta.glob('/src/assets/images/hero-slider/titles/*.png', { eager: true }) as Record<string, { default: string }>;
export const titleImagePaths = Object.values(titles).map(img => img.default);

export const hasTitles = titleImagePaths.length === imagePaths.length;