import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '@/views/ResumeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'resume',
            component: ResumeView,
            meta: {
                layout: 'AppLayout',
                title: 'Fullstack Developer',
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        } else {
            return { top: 0 }
        }
    }
})


// Переименновывание страницы
router.beforeEach(async (to, from, next) => {
    // Устанавливаем заголовок страницы, если указан
    if (to.meta.title) {
        document.title = `${to.meta.title} | Романовский Алексей`
    } else {
        document.title = 'Романовский Алексей'
    }

    next()
})

export default router