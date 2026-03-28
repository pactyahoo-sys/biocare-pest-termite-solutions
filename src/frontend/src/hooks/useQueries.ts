import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      address: string;
      services: string[];
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(
        data.name,
        data.phone,
        data.address,
        data.services,
      );
    },
  });
}
