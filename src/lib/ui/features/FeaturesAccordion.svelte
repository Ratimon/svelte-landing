<script lang="ts">

    interface Feature {
        title: string;
        description: string;
        type?: "video" | "image";
        path?: string;
        format?: string;
        alt?: string;
        svg?: HTMLElement;
    }

</script>