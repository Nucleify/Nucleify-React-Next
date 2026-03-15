export {};

declare global {
  function isClient(): boolean;
  function isMobile(): boolean;
  function isDesktop(): boolean;
}