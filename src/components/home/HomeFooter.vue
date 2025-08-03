<template>
    <footer class="footerHome">
        <div style="border-bottom: 1px solid rgba(128, 128, 128, 0.3); justify-content: start;">Perú</div>
        <div>
            <div>
                <p>Quien soy</p>
                <p>Experiencia</p>
                <p>Estudio</p>
            </div>
            <div>
                <p>Conocimientos</p>
                <p>Curriculum</p>
            </div>
        </div>
    </footer>
</template>
<script></script>
<style>
.footerHome {
    background-color: rgba(128, 128, 128, 0.1);
    display: grid;
}

.footerHome>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px;
}

.footerHome>div>div {
    display: flex;
    gap: 20px;
}

.footerHome>div>div>p {
    display: flex;
    align-items: center;
}


@media (max-width: 1200px) {
    .footerHome>div {
        justify-content: space-around;
    }
}

@media (max-width: 600px) {
    .footerHome {
        grid-template-rows: 34% 66%;
    }

    .footerHome>div {
        justify-content: center;
        display: grid;
    }
    .footerHome>div>div {
        justify-content: center;
}
}
</style>