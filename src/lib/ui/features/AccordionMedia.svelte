<script lang="ts">

    export let type: string = "";
    export let path: string = "";
    export let format: string = "";
    export let alt: string = "";
    export let style: string = "";


    const size = {
        width: 500,
        height: 500,
    };

</script>


{#if type === "video"}
    <video
        class={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
    >
        <source src={path} type={format} />
    </video>
{:else if type === "image"}
    <img
        src={path}
        alt={alt}
        class={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
    />
{:else}
    <div class={`${style} !border-none`}></div>
{/if}




