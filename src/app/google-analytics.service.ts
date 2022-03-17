import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  trackPagesHandler(pagePath){
    gtag('set', 'page', pagePath);
    gtag('send', 'pageview');
  }

  trackEventHandler(eventAction, eventLabel, eventCategory) {
    const eventData = {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
    };

    gtag('event', eventAction, {
      'event_category': eventCategory,
      'event_label': eventLabel
    });
  }
}
