import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
    const isMobile = ref(false)
    const screenWidth = ref(0)

    const checkDevice = () => {
        screenWidth.value = window.innerWidth
        isMobile.value = window.innerWidth < 768
    }

    const handleResize = () => {
        checkDevice()
    }

    onMounted(() => {
        checkDevice()
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })

    return {
        isMobile,
        screenWidth,
        isDesktop: ref(!isMobile.value)
    }
}