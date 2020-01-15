import Vue from "vue";

export default function firstExternalFunc() {
    var app = new Vue({
        el: '#app',
        data: { message: "I Like Chicken Fingers and Pizza" },
        mounted () {
            console.log("Howard Stern's Penis");
        }
    });
}