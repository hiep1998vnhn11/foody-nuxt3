<script lang="ts" setup>
export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const menus = computed((): IMenuItem[] => [
  { type: 'link', text: 'Blank', route: { name: 'blank' } },
  { type: 'link', text: 'test', route: { name: 'test' } },
  { type: 'link', text: 'post', route: { name: 'post' } },
  { type: 'link', text: 'setting', route: { name: 'setting' } },
  { type: 'link', text: 'about', route: { name: 'about' } },
  {
    type: 'button',
    text: 'dashboard',
    route: { name: 'dashboard' },
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          123
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="flex-1 hover:no-underline capitalize"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ 'components.theme_switcher.change_theme' }}
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ 'components.language_switcher.change_language' }}
          </div>
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <span class="ml-1">Github</span>
        </Button>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
