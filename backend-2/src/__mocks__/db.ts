import { PrismaClient } from "@prisma/client";
import { vi } from "vitest";
import {mockDeep , mockReset} from "vitest-mock-extended"

const prisma = mockDeep<PrismaClient>();
export { prisma }