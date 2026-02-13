/**
 * ProjectRenderer - Renders project detail page sections
 */

import { el, getThumbnail } from './utils.js';

/**
 * Append a headed section to a container
 */
function section(container, heading, ...content) {
  container.appendChild(el('h2', {}, heading));
  content.flat().forEach(node => container.appendChild(node));
}

/**
 * Create a list
 */
function list(items = []) {
  return el('ul', { class: 'list' },
    items.map(text => el('li', {}, text))
  );
}

function linkExternal(href, attrs = {}, ...children) {
  return el('a', {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    ...attrs
  }, ...children);
}

/**
 * Render tags section with clickable links to filter
 */
export function renderTags(container, tags) {
  if (!container || !tags?.length) return;

  const tagElements = el('div', { class: 'filter-tags' },
    tags.map(tag => el('a', {
      href: `/index.html?filter=${encodeURIComponent(tag)}#project-list`,
      class: 'filter-tag'
    }, el('span', {}, tag)))
  );
  
  container.appendChild(tagElements);
}

/**
 * Render description
 */
export function renderDescription(container, descriptions) {
  if (!container || !descriptions) return;
  descriptions.forEach(node => container.appendChild(el('p', {}, node)));
}


/**
 * Render contributions section
 */
export function renderContributions(container, contributions) {
  if (!container || !contributions?.length) return;
  section(container, 'Core Technical Contributions', list(contributions));
}

/**
 * Extract YouTube video ID from URL
 */
function getYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
  return match ? match[1] : null;
}

/**
 * Custom favicon paths for sites where default resolution doesn't work well.
 */
const CUSTOM_FAVICON_MAP = {
  'excellolab.org': (url) => `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`,
  'refense.com': (url) => `https://icons.duckduckgo.com/ip3/${url.hostname}.ico`,
};

/**
 * Get custom favicon URL if hostname matches any custom mapping
 */
function getCustomFavicon(url) {
  const hostname = url.hostname;

  // Check for exact or partial hostname match
  for (const [domainName, getFavicon] of Object.entries(CUSTOM_FAVICON_MAP)) {
    if (hostname === domainName || hostname.endsWith('.' + domainName)) {
      return getFavicon(url);
    }
  }
  return null;
}

/**
 * Get link type and preview info
 */
function getLinkInfo(href) {
  const youtubeId = getYouTubeId(href);
  if (youtubeId) {
    return {
      type: 'youtube',
      thumbnail: `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`,
      icon: null
    };
  }

  try {
    const url = new URL(href);

    // Check custom mapping first
    const customIcon = getCustomFavicon(url);
    if (customIcon) {
      return {
        type: 'website',
        thumbnail: null,
        icon: customIcon,
        icon_alt: null
      };
    }

    return {
      type: 'website',
      thumbnail: null,
      icon: `${url.origin}/favicon.ico`,
      icon_alt: `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`
    };
  }
  catch {
    return { type: 'generic', thumbnail: null, icon: null };
  }
}

/**
 * Render videos section
 */
export function renderVideos(container, videos) {
  if (!container || !videos?.length) return;

  const videosGrid = el('div', { class: 'videos-grid' },
    videos.map(video => {
      const linkInfo = getLinkInfo(video.href);

      return linkExternal(video.href, { class: 'link-card video' },
        el('div', { class: 'link-card-thumbnail' },
          el('img', { src: linkInfo.thumbnail, alt: video.title }),
          el('div', { class: 'link-card-play-container' },
            el('span', { class: 'link-card-play'}, '\u25B6 \n'),
            el('span', { class: 'link-card-play-text'}, 'Play on YouTube'),
          ),         
        ),
        el('span', { class: 'link-card-title' }, video.title)
      );
    })
  );

  section(container, 'Videos', videosGrid);
}

/**
 * Create favicon image with fallback handling
 */
function createFaviconImg(info) {
  if (!info.icon && !info.icon_alt) {
    return el('span', { class: 'link-card-icon-default' }, '\u{1F517}');
  }

  const img = el('img', { src: info.icon || info.icon_alt, alt: '' });

  // Handle load error - try fallback or show default
  img.onerror = () => {
    if (info.icon_alt && img.src !== info.icon_alt) {
      img.src = info.icon_alt;
    }
    else {
      // Replace with default icon
      const parent = img.parentNode;
      if (parent) {
        const defaultIcon = el('span', { class: 'link-card-icon-default' }, '\u{1F517}');
        parent.replaceChild(defaultIcon, img);
      }
    }
  };

  return img;
}

/**
 * Render links section with previews
 *
 * Link objects can have optional `icon` property for manual override:
 * { title: "Website", href: "https://...", icon: "https://example.com/favicon.png" }
 */
export function renderLinksSection(container, links) {
  if (!container || !links?.length) return;

  const linksGrid = el('div', { class: 'links-grid' },
    links.map(link => {
      const info = getLinkInfo(link.href);

      return linkExternal(link.href, { class: 'link-card website' },
        el('div', { class: 'link-card-icon' }, createFaviconImg(info)),
        el('span', { class: 'link-card-title external' }, link.title)
      );
    })
  );

  section(container, 'Links', linksGrid);
}

/**
 * Render archived versions as a grid of link cards
 */
export function renderArchived(container, versions) {
  if (!container || !versions?.length) return;

  const grid = el('div', { class: 'links-grid' },
    versions.map(version => {
      const preview = 
        el('div', { class: 'link-card-thumbnail-large' },
          el('img', { src: version.icon, alt: version.title })
        );
        

      return linkExternal(version.href, { class: 'link-card website' },
        preview,
        el('span', { class: 'link-card-title external' }, version.title)
      );
    })
  );

  section(container, 'Derived Projects', grid);
}

export function renderPublications(container, publications) {
  if (!container || !publications?.length) return;

  const ul = el('ul', { class: 'list' },
    publications.map((pub) => {
      const doiUrl = pub.doi ? `https://doi.org/${pub.doi}` : null;
      if (!doiUrl) {
        return el('li', {}, pub.citation);
      }
      return el('li', {},
        pub.citation + ' ',
        linkExternal(doiUrl, { class: 'external url-text' }, doiUrl)
      );
    })
  );

  section(container, 'Publications', ul);
}

/**
 * Set up the banner thumbnail and blurred background
 */
export function renderBanner(thumbnailImg, project) {
  const thumbnail = getThumbnail(project);
  if (!thumbnailImg || !thumbnail) return;

  thumbnailImg.src = thumbnail.src;
  thumbnailImg.alt = `${project.title} thumbnail`;
  document.getElementById('project-banner-bg')
    ?.style.setProperty('background-image', `url(${thumbnail.src})`);
}

/**
 * Render image gallery using Swiper carousel + GLightbox
 */
export function renderGallery(container, project) {
  if (!container || !project.media?.length) return;

  const galleryImages = project.media.filter(m => m.type === 'image' && m.role !== 'thumbnail');
  if (!galleryImages.length) return;

  // Build Swiper slides
  const slides = galleryImages.map((media) => {
    const img = el('img', { src: media.src, alt: `${project.title} screenshot` });
    const linkAttrs = {
      href: media.src,
      class: 'glightbox',
      'data-gallery': `project-${project.id}`,
      'data-title': media.description ? media.description : '',
    };

    const link = el('a', linkAttrs, img);
    const figure = el('figure', { class: 'gallery-item' }, link);

    if (media.description) {
      figure.appendChild(el('figcaption', {}, media.description));
    }

    return el('div', { class: 'swiper-slide' }, figure);
  });

  const swiperWrapper = el('div', { class: 'swiper-wrapper' }, slides);
  const pagination = el('div', { class: 'swiper-pagination' });
  const prevBtn = el('div', { class: 'swiper-button-prev' });
  const nextBtn = el('div', { class: 'swiper-button-next' });

  const swiperContainer = el('div', { class: 'swiper project-gallery-swiper' },
    swiperWrapper
  );

  // Arrows + pagination live outside swiper so overflow:hidden doesn't clip them
  const wrapper = el('div', { class: 'gallery-carousel-wrapper' },
    prevBtn,
    swiperContainer,
    nextBtn,
    pagination
  );

  container.appendChild(wrapper);

  function initSwiper(isPortrait) {
    const swiper = new Swiper(swiperContainer, {
      slidesPerView: 1.2,
      spaceBetween: 12,
      grabCursor: true,
      navigation: { nextEl: nextBtn, prevEl: prevBtn },
      pagination: { el: pagination, clickable: true },
      breakpoints: {
        641: { slidesPerView: isPortrait ? 3 : 1.2, spaceBetween: 26 },
      },
    });

    if (!swiper.isLocked) {
      wrapper.classList.add('has-nav');
    }
  }

  // Detect orientation from first image, then init Swiper
  const firstImg = swiperContainer.querySelector('img');
  if (firstImg) {
    const onReady = () => {
      initSwiper(firstImg.naturalHeight > firstImg.naturalWidth);
    };
    
    if (firstImg.complete && firstImg.naturalHeight > 0) {
      onReady();
    }
    else {
      firstImg.addEventListener('load', onReady);
      firstImg.addEventListener('error', () => initSwiper(false));
    }
  }
  else {
    initSwiper(false);
  } 
 
  GLightbox({ selector: '.glightbox', loop: true });
}

/**
 * Render banner info box
 */
export function renderBannerInfo(container, project) {
  if (!container) return;

  const createDetailItem = (label, value) => {
    if (!value || (Array.isArray(value) && !value.length)) return null;

    const displayValue = Array.isArray(value) ? value.join(', ') : value;

    return el('div', { class: 'project-banner-detail-item' },
      el('span', { class: 'label' }, `${label}: `),
      el('span', { class: 'value' }, displayValue)
    );
  };
  
  const items = [
    createDetailItem('Role', project.roles),
    createDetailItem('Languages', project.languages),
    createDetailItem('Type', project.projectType)
  ].filter(Boolean);
    
  items.forEach(item => container.appendChild(item));
}