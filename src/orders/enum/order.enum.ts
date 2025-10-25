import { OrderStatus } from '@prisma/client';


export const OrderStatusList = [
  OrderStatus.PAID,
  OrderStatus.PENDING,
  OrderStatus.DELIVERED,
  OrderStatus.CANCELLED,
]