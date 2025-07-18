export interface Contact {
    _id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string
    company?: string
    subject: string
    category: ContactCategory
    message: string
    priority: ContactPriority
    status: ContactStatus
    createdAt: Date
    updatedAt: Date
    ipAddress?: string
    userAgent?: string
    notes?: string
    assignedTo?: string
    resolvedAt?: Date
}

export type ContactCategory = "account" | "transaction" | "technical" | "billing" | "feature" | "partnership" | "other"

export type ContactPriority = "low" | "medium" | "high" | "urgent"

export type ContactStatus = "new" | "in-progress" | "resolved" | "closed"

export interface ContactResponse {
    success: boolean
    message: string
    ticketNumber?: string
    contactId?: string
}
