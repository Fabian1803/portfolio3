<template>
    <header class="headerHome">
        <p>Github</p>
        <p>Linkedin</p>
        <div class="iconos">
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
.headerHome {
    display: flex;
    gap: 10px;
    justify-content: end;
    height: 60px;
    align-items: center;
    padding-right: 15px;
}

.iconos{
    display: flex;
    align-items: center;
    gap: 20px;
}

.iconMenu {
    display: flex;
    width: 40px;
    height: 40px;
    gap: 2px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.iconMenu>* {
    font-size: 18px;
}

.iconProfile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.profile{
    background-color: brown;
    width: 80%;
    height: 80%;
    border-radius: 50%;
}
.iconProfile:hover,.iconMenu:hover{
    background-color: red;
}
</style>