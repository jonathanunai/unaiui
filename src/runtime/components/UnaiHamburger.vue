<template>
  <div class="hamburger-wrapper">
    <div class="hamburger"></div>
  </div>
</template>
<style lang="scss">
.hamburger-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--navbarHeight);
  width: var(--navbarHeight);
  cursor: pointer;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  background-color: #333;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.hamburger::before {
  content: "";
  margin-top: -8px;
}

.hamburger::after {
  content: "";
  margin-top: 8px;
}

.open {
  .hamburger::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }
  .hamburger {
    background: rgba(255, 255, 255, 0);
  }
  .hamburger::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }
  .menu-items {
    transform: translateX(0);
  }
}

@media (min-width: 769px) {
  .hamburger-wrapper {
    display: none;
  }
}
</style>
