<template>
    <main class="mainHome">
        <div class="contMain">
            <div class="titleHome">
                <img src="../../assets/log.png" alt="GoogleIcon" height="100" class="googleLogo">
            </div>
            <div class="inputMain">
                <font-awesome-icon icon="magnifying-glass" />
                <input type="text">
                <img src="../../assets/icon/microIcon.png" alt="MicrofonoIcon" width="15" height="20">
                <img src="../../assets//icon/camaraIcon.png " alt="CamaraIcon" width="25" height="25">
            </div>
            <div class="btnHome">
                <router-link to="/fabian">Buscar en Google</router-link>
                <router-link to="/fabian">Voy a tener suerte</router-link>
            </div>
            <p class="language">Google disponible en: Español (Latinoamérica)</p>
        </div>
    </main>
</template>
<script></script>
<style>
.mainHome {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contMain {
    width: 500px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.titleHome {
    display: flex;
    font-size: 100px;
    justify-content: center;
}

.inputMain {
    height: 45px;
    border-radius: 30px;
    padding: 0 15px 0 15px;
    display: grid;
    grid-template-columns: 5% auto 5% 5%;
    align-items: center;
    border: 1px solid;
}

.inputMain>input {
    height: 90%;
    border: none;
    outline: none;
}

.inputMain>input:focus {
    outline: none;
}

.btnHome {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.btnHome>* {
    background-color: rgba(128, 128, 128, 0.1);
    text-decoration: none;
    color: black;
    padding: 8px 15px 8px 15px;
    border-radius: 5px;
    border: 1px solid transparent;
}

.btnHome>*:hover {
    border: 1px solid rgba(128, 128, 128, 0.3);
}

.contMain>p {
    text-align: center;
}

.language {
    font-size: 16px;
}

@media (max-width: 1200px) {}

@media (max-width: 600px) {
    .contMain {
        width: 100%;
        max-width: 100%;
        padding: 0 3% 0 3%;
    }
}

@media (max-width: 370px) {
    .googleLogo {
        height: 80px;
    }

    .inputMain {
        grid-template-columns: 8% auto 8% 8%;
    }

    .language {
        font-size: 14px;
    }
}
</style>