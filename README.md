# Superfish Afterthought Plugin

This is a WordPress Plugin to add the SuperFish auto-expanding design pattern to dropdown menus. 

Why is it called Superfish Afterthought? Because if you are making a new site, you should do better. [Bootstrap is a good example of a proper menu](https://getbootstrap.com/docs/4.0/components/navbar/).  This Plugin is meant to be a minimally invasive method to make an old Theme's menu more accessibile than it was... as an afterthought... as Plan B.

## Accessibile-ish

Most dropdown menus in old WordPress Themes are not accessible for keyboard only and screen reader users. This Plugin is intended to make entirely innaccessible menus a little more accessible for people with disabilities.

## How to use

For better or worse, this Plugin requires no configuration. WordPress themes are notoriously unpredictable. One of the only things we can rely on is the `.menu-item-`... classes on menu items. This Plugin parses for Menus with dropdowns.

1. Check if the menu on your Theme is already keyboard and screen reader accessible (they are not the same thing).
2. If not, enable the Plugin. See if it works.
3. Check if the hover state on the css got messed up.  If it does, write a few lines of CSS to fix it. Usually it is a matter of finding the Theme's CSS `:hover` state rules then adding or mimicking the selector. Example:

```css
.foo .menu-item a:hover {
  some: styles;
}
```

```css
.foo .menu-item:hover,
.foo .menu-item.sfHover {
  some: styles;
}
```

## Want to complain about SuperFish?

- Is SuperFish perfect. No. 
- Is it compliant with WCAG 2.0 AA Guidelines? Dubiously at best. 
- Does Superfish make an innaccessible menu more accessible for people with some disabilities? __YES__.
- Do you want to rant about SuperFish accessibility problems? [Go to the SuperFish issue queue over there and help them make it better](https://github.com/joeldbirch/superfish/issues).

## Testimonials 

I've talked to JAWS and NVDA users. For the most part they don't mind using a SuperFish menu under two conditions. 1) When it is clear how to use it. That is why I insert some screen reader only text before each menu to indicate how it works. 2) The menu is short. Don't abuse SuperFish by adding it to a menu with a ton of links. 
