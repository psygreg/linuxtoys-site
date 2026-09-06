Distribution logo setup

1. Put each distribution logo in this directory, preferably as SVG.
   PNG and WebP also work.

2. Open home/script.js.

3. Replace the placeholder DISTRO_LOGOS array with the real list, e.g.:

const DISTRO_LOGOS = [
  { name: "Fedora", file: "fedora.svg" },
  { name: "Ubuntu", file: "ubuntu.svg" },
  { name: "Arch Linux", file: "arch.svg" },
];

The grid is generated automatically and is responsive.
