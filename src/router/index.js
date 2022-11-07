import { createRouter, createWebHistory} from "vue-router";

import ApartmentList from "@/views/ApartmentList";
import ApartmentDetails from "@/views/ApartmentDetails";
import ImprintView from "@/views/ImprintView";

const routes = [
    {path: '/', name: 'Home', component: ApartmentList },
    {path: '/apartmentdetails/:id', name: 'ApartmentDetails', component: ApartmentDetails },
    {path: '/imprint', name: 'Imprint', component: ImprintView }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
