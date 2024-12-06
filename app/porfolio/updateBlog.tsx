"use client";

import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

 
 
export function UpdateBlog({
  id,
  oldImage,
  oldTitle,
  oldContent
}: {
  id: string;
  oldImage: string;
  oldTitle: string;
  oldContent: string;
}) {
   const [image, setImage] = useState(oldImage);
  const [title, setTitle] = useState(oldTitle);
  const [content, setContent] = useState(oldContent);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      id: string;
     image: string;
      title: string;
      content: string;
    }) => {
      return fetch("/api/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ id, image, title, content });
  };

  return (
    <>
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Button color="primary">Edit</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form onSubmit={onSubmit}>
            <div className="px-1 py-2">
              <Input
                variant="bordered"
                isRequired
                label="Image"
                labelPlacement="outside"
                value={image}
                placeholder="Image"
                type="text"
                onChange={(e) => setImage(e.target.value)}
              />
              <Input
                variant="bordered"
                isRequired
                label="Title"
                labelPlacement="outside"
                value={title}
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                variant="bordered"
                isRequired
                label="Content"
                labelPlacement="outside"
                value={content}
                placeholder="Content"
                type="text"
                onChange={(e) => setContent(e.target.value)}
              />

             
              <Button type="submit">Done</Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
