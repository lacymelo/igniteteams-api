import { Router } from "express"
import { CreateGroupController } from "../modules/groups/CreateGroup/CreateGroupController"
import { ListAllGroupsController } from "../modules/groups/ListAllGroups/ListAllGroupsController"
import { RemoveGroupController } from "../modules/groups/RemoveGroup/RemoveGroupController"
import { SearchGroupController } from "../modules/groups/SearchGroup/SearchGroupController"

const groupsRoutes = Router()

const createGroupController = new CreateGroupController()
const listAllGroupsController = new ListAllGroupsController()
const searchGroupController = new SearchGroupController()
const removeGroupController = new RemoveGroupController()

//cria novo grupo
groupsRoutes.post('/group/create', createGroupController.handle)

// lista todos os grupos
groupsRoutes.get('/group/groupsList', listAllGroupsController.handle)

// buscar por grupo
groupsRoutes.get('/group/groupSearch/:id/:team', searchGroupController.handle)

// remove um grupo
groupsRoutes.get('/group/removeGroup/:id', removeGroupController.handle)

export { groupsRoutes }


