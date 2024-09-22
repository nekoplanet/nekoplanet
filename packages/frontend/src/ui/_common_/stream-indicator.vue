<!--
SPDX-FileCopyrightText: syuilo and misskey-project
SPDX-License-Identifier: AGPL-3.0-only
-->

<template>
<div v-if="hasDisconnected && defaultStore.state.serverDisconnectedBehavior === 'quiet'" :class="$style.root" class="_panel _shadow" @click="resetDisconnected">
	<div class="_mk_reload_dialog"><i src="https://data.nekoplanet.xyz/nekoplanet-storage/misskey/9ef374e9-8e6c-40f3-8aec-67e2944f10d9.webp" class="_mk_reload_inner"></i> {{ i18n.ts.disconnectedFromServer }}</div>
	<div :class="$style.command" class="_buttons">
		<MkButton small primary @click="reload">{{ i18n.ts.reload }}</MkButton>
		<MkButton small>{{ i18n.ts.doNothing }}</MkButton>
	</div>
</div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';
import { useStream } from '@/stream.js';
import { i18n } from '@/i18n.js';
import MkButton from '@/components/MkButton.vue';
import * as os from '@/os.js';
import { defaultStore } from '@/store.js';

const zIndex = os.claimZIndex('high');

const hasDisconnected = ref(false);

function onDisconnected() {
	hasDisconnected.value = true;
}

function resetDisconnected() {
	hasDisconnected.value = false;
}

function reload() {
	location.reload();
}

useStream().on('_disconnected_', onDisconnected);

onUnmounted(() => {
	useStream().off('_disconnected_', onDisconnected);
});
</script>

<style lang="scss" module>
.root {
	position: fixed;
	z-index: v-bind(zIndex);
	bottom: calc(var(--minBottomSpacing) + var(--margin));
	right: var(--margin);
	margin: 0;
	padding: 12px;
	font-size: 0.9em;
	max-width: 320px;
}

.command {
	margin-top: 8px;
}

._panel {
	// 유즈 에러화면 (!important 파티)
	padding-top: 8px !important;

	>div._mk_reload_dialog {
		font-size: 0 !important;
		text-align: center !important;
		&:after {
			display: inline-block !important;
			margin-left: 100px !important;
			vertical-align: middle !important;
			font-size: 14px !important;
		}

		._mk_reload_inner {
			display: inline-block;
			&::before {
				content: "" !important;
				display: inline-block !important;
				background-size: 42px 37px !important;
				width: 42px; height: 37px !important;
				vertical-align: middle !important;
				transform: scale(1.4) !important;
			}
		}
	}
}
</style>
