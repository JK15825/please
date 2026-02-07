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
			// centered image with better positioning
			width: auto;
			height: 60vh;
			aspect-ratio: 9 / 16;
			position: absolute;
			top: 8vh;
			left: 50%;
			transform: translateX(-50%);
			object-fit: cover;
			border-radius: 16px;
			border: 3px solid rgba(255, 107, 107, 0.8);
			box-sizing: border-box;
			filter: drop-shadow(0 12px 30px rgba(255, 107, 107, 0.2));
			z-index: 1;
		}

		h1 {
			font-size: 1.1rem;
			line-height: 1.4;
		}

		.col {
			// improved bottom message panel
			position: absolute;
			bottom: 3vh;
			left: 50%;
			transform: translateX(-50%);
			width: min(90vw, 600px);
			height: fit-content;
			background: rgba(255, 255, 255, 0.95);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			border: 1px solid rgba(0, 0, 0, 0.08);
			border-radius: 20px;
			padding: 1.5rem 1.75rem;
			box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15), 
			            0 8px 20px rgba(0, 0, 0, 0.08);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1.25rem;
			box-sizing: border-box;
			z-index: 10;

			h1 {
				font-size: 1.1rem;
				font-weight: 600;
				line-height: 1.5;
				color: #111;
				margin: 0;
				text-align: center;
				padding: 0 0.5rem;
			}

			button {
				padding: 0.85rem 2.5rem;
				font-size: 1.15rem;
				font-weight: 600;
				border: none;
				border-radius: 14px;
				background: linear-gradient(135deg, #ff6b6b 0%, #ff4c4c 100%);
				color: white;
				cursor: pointer;
				transition: all 0.3s ease;
				box-shadow: 0 8px 20px rgba(255, 76, 76, 0.25);

				&:hover {
					transform: translateY(-2px);
					box-shadow: 0 12px 28px rgba(255, 76, 76, 0.35);
				}

				&:active {
					transform: translateY(0);
				}
			}
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
