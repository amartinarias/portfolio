// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import MainSection from '@/components/layout/MainSection.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainSection
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutSection.vue')
    },
    {
        path: '/experience',
        name: 'Experience',
        component: () => import('@/views/ExperienceSection.vue')
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('@/views/SkillsSection.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/ProjectsSection.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/ContactSection.vue')
    },
    // Catch-all 404 route
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            };
        }
    }
});

export default router;