import FormHeader from '@/components/dashboard/FormHeader'
import NewCategoryForm from '@/components/forms/NewCategoryForm'
import { X } from 'lucide-react'

const NewCategory = () => {
  return (
    <div>
      {/* Header */}
      <FormHeader href={'/'} icon={X} title="New Category" />

      {/* Form */}
      <NewCategoryForm />
    </div>
  )
}

export default NewCategory
