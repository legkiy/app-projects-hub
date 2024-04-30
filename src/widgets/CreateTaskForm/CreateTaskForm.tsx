'use client';

import { Button, TextArea, TextField } from '@/share/UI';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';
import { TaskType } from '../DnD/_mockData';

const createTaskFormSchema = zod.object({
  title: zod.string().min(1, 'fill the field'),
  description: zod.string().optional(),
});

interface CreateTaskFormProps {
  onCreateTask: (data: TaskType) => void;
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({ onCreateTask }) => {
  const t = useTranslations();
  const methods = useForm({
    resolver: zodResolver(createTaskFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    const validateData: TaskType = {
      ...(data as TaskType),
      id: Date.now().toString(36),
    };
    onCreateTask(validateData);
    methods.reset();
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form noValidate onSubmit={onSubmit}>
          <TextField label={t('title')} name="title" />
          <TextArea label={t('description')} name="description" />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};
export default CreateTaskForm;
