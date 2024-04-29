// export const isTeacher = (userId?: string | null) => {
//   return userId === process.env.NEXT_PUBLIC_TEACHER_ID
// }

export const isTeacher = (userId?: string | null) => {
  const teacherIds: string[] = process.env.NEXT_PUBLIC_TEACHER_ID
    ? (process.env.NEXT_PUBLIC_TEACHER_ID as string).split(',')
    : [] // Ensure the value is casted to a string before splitting
  return userId !== undefined && userId !== null && teacherIds.includes(userId)
}
