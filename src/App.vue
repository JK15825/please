<script setup lang="ts">
import { ref } from "vue"
const cur = ref(0)

const images = ref<string[]>([
	new URL('./assets/1.jpg', import.meta.url).href,
	new URL('./assets/2.jpg', import.meta.url).href,
	new URL('./assets/3.jpg', import.meta.url).href,
	new URL('./assets/4.jpg', import.meta.url).href,
	new URL('./assets/5.jpg', import.meta.url).href,
	new URL('./assets/6.jpg', import.meta.url).href,
	new URL('./assets/7.jpg', import.meta.url).href,
])

const messages = ref<string[]>([
	"I fell in love with you the first time we spent time together.",
	"And I've fallen more in love with you every day since.",
	"I know moving isn’t the most romantic way to spend Valentine’s Day.",
	"But I couldn’t imagine doing it with anyone else.",
	"Will you be my Valentine?",
])


function next() {
	if (cur.value < 5) {
		cur.value += 1
	}
}
function back() {
	if (cur.value > 1) {
		cur.value -= 1
	}
}

</script>

<template>
	<div class="mainContainer">
		<template v-if="cur === 0">
			<div class="col">
				<h1> Hi. </h1>
				<h1> I love you. </h1>
			</div>

			<div class="imageCarousel">
				<img v-for="(img, idx) in images" :key="idx" :src="img" class="image" />
			</div>

			<div class="col">
				<button @click="cur = 1"> Go?</button>
			</div>
		</template>
		<template v-else>
			<div class="secondaryContainer">
				<img :src="images[cur - 1]" class="image" />
				<div class="col">
					<h1> {{ messages[cur - 1] }} </h1>
					<button @click="next" v-if="cur !== 5"> Next </button>
				</div>
			</div>
		</template>

	</div>
</template>

<style lang="scss">
.mainContainer {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
	background-color: #ffd1dc;
	overflow: hidden;

	h1 {
		font-family: 'Arial', sans-serif;
		color: black;
		padding: 0 20px;
	}

	& .imageCarousel {
		display: flex;
		gap: 2%;
		animation: scroll 20s linear infinite;

		.image {
			width: fit-content;
			height: 60vh;
			aspect-ratio: 9 / 16;
			object-fit: cover;
			border-radius: 10px;
			border: 2px solid #ff6b6b;
			box-sizing: border-box;
			filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5));
		}
	}

	& .col {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;

		button {
			padding: 3vw 8vw;
			font-size: 1.5rem;
			border: none;
			border-radius: 5px;
			background-color: #ff6b6b;
			color: black;
			cursor: pointer;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: #ff4c4c;
			}
		}
	}

	.secondaryContainer {
		display: flex;
		gap: 50px;
		align-items: center;
		position: relative;
		width: 100%;
		height: 100%;

		.image {
			//absolute filling the screen
			width: fit-content;
			height: 60vh;
			aspect-ratio: 9 / 16;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			object-fit: cover;
			border-radius: 10px;
			border: 2px solid #ff6b6b;
			box-sizing: border-box;
			filter: drop-shadow(0 0 5px rgba(255, 107, 107, 0.5));
		}

		h1 {
			font-size: 1rem;
		}

		.col {
			//posision absolute bottom, width: 80vw; height: 20vh;
			//background transparent white, with black border, text is a color that works on it
			position: absolute;
			bottom: 2vh;
			width: 80vw;
			height: fit-content;
			background-color: rgba(255, 255, 255, 0.8);
			border: 2px solid black;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 0;
			right: 0;
			margin: auto;
			padding: 2vh;
			box-sizing: border-box;
			border-radius: 2vh;
		}

	}
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-50%);
	}
}

#app,
body,
html {
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
}
</style>
