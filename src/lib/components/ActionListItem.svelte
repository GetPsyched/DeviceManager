<script lang="ts">
  import {KEYMAP_CODES} from "$lib/serial/keymap-codes"
  import type {KeyInfo} from "$lib/serial/keymap-codes"

  export let id: number | KeyInfo

  $: key = (typeof id === "number" ? KEYMAP_CODES[id] ?? id : id) as number | KeyInfo
</script>

<button on:click>
  {#if typeof key === "object"}
    <div class="title">
      <b>
        {key.title || ""}
        {#if key.variant === "left"}
          (Left)
        {:else if key.variant === "right"}
          (Right)
        {/if}
      </b>
      {#if key.description}
        <i>{key.description}</i>
      {/if}
    </div>
    <kbd class:icon={!!key.icon}>{key.icon || key.id || `0x${key.code.toString(16)}`}</kbd>
  {:else}
    <span class="key">0x{key.toString(16)}</span>
  {/if}
</button>

<style lang="scss">
  button {
    display: flex;
    gap: 4px;
    align-items: center;

    width: 100%;
    height: auto;
    margin: 0;
    padding: 8px;

    font-family: "Noto Sans Mono", monospace;
    color: inherit;

    background: transparent;
    border: none;
    border-radius: 8px;

    &:focus-visible {
      color: var(--md-sys-color-on-surface-variant);
      background: var(--md-sys-color-surface-variant);
      outline: none;
    }
  }

  .title {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    text-align: start;
  }

  kbd {
    height: 24px;
  }
</style>
