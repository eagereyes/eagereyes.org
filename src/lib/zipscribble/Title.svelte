<script>

    let { width, height, title, subtitle } = $props();

</script>

<rect x={0} y={0} {width} {height} class="bg" />
<text x={5} y={20}>{title}</text>
<text x={5} y={40}>{subtitle}</text>

<style>
    .bg {
        fill: #e8e8e8;
    }

    text {
        fill: black;
    }

    @media (prefers-color-scheme: dark) {
        .bg {
            fill: #333;
        }

        text {
            fill: lightgray;
        }
    }
</style>