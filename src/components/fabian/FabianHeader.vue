<template>
    <header class="header">
        <div class="logo">
            <img src="../../assets/log.png" alt="GoogleIcon" height="35" class="googleLogo">
        </div>
        <div>
            <div class="inputHeader">
                <input type="text">
                <img src="../../assets/icon/microIcon.png" alt="MicrofonoIcon" width="15" height="20">
                <img src="../../assets//icon/camaraIcon.png " alt="CamaraIcon" width="25" height="25">
                <font-awesome-icon icon="magnifying-glass" />
            </div>
            <ul class="menu">
                <li>todo</li>
                <li>Experiencia</li>
                <li>Proyectos</li>
                <li>Habilidades</li>
                <li>Contacto</li>
                <li>Sobre mí</li>
            </ul>
            
        </div>
        <div>
                <div class="iconMenu">
                    <font-awesome-icon icon="ellipsis-vertical" />
                    <font-awesome-icon icon="ellipsis-vertical" />
                    <font-awesome-icon icon="ellipsis-vertical" />
                </div>
                <div class="iconProfile">
                    <img src="" alt="" class="profile">
                </div>
            </div>
    </header>
</template>
<script></script>
<style>
.header {
    height: 100%;
    border-bottom: 1px solid gray;
    display: grid;
    width: 100%;
    grid-template-columns: 10% 50% 40%;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
}
.inputHeader {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
}

.menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menu li {
    padding: 12px 16px;
    cursor: pointer;
}

.menu li:hover {
    background-color: lightgray;
}
</style>