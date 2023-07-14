import { Router } from 'express'
import doctorRoutes from '../../../../template_nodejs-1/src/api/components/doctores/routes'
import citaRoutes from '../../../../template_nodejs-1/src/api/components/citas/routes'
import pacienteRoutes from '../../../../template_nodejs-1/src/api/components/pacientes/routes'

const router = Router()

router.use('/doctores', doctorRoutes)
router.use('/citas', citaRoutes)
router.use('/pacientes', pacienteRoutes)

export default router