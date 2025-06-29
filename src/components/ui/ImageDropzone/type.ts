export type TImageDropzoneProps = {
  images: File[];
  onDrop: (acceptedFiles: File[]) => void;
  onRemove: (index: number) => void;
};
