import { Input } from "@/components/ui/input";
import { ButtonBevel } from "../ui/button-bevel";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

export const ContactForm = () => {
  return (
    <form
      action=""
      className=" px-8 py-12 rounded-md  bg-white overflow-hidden"
    >
      <div className="z-10">
        <FieldSet>
          <FieldLegend>
            Contact Information
            <div className="mb-4 relative">
              <span className="w-1/3 h-0.5 absolute -bottom-1 left-0 rounded-r-md bg-accent"></span>
            </div>
          </FieldLegend>
          {/*<FieldDescription>This appears on invoices and emails.</FieldDescription>*/}
          <FieldGroup className="space-y-4 max-w-2/3">
            <Field>
              <FieldLabel htmlFor="firstname">First name</FieldLabel>
              <Input
                id="firstname"
                autoComplete="off"
                placeholder="John/Jane"
              />
              {/*<FieldError>Name is required.</FieldError>*/}
            </Field>
            <Field>
              <FieldLabel htmlFor="lastname">Last name</FieldLabel>
              <Input id="lastname" autoComplete="off" placeholder="Doe" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                autoComplete="off"
                placeholder="John@example.com"
              />
              {/*<FieldError>Please use a valid email address</FieldError>*/}
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" autoComplete="off" placeholder="02 8357 2907" />
              {/*<FieldError>Choose another username.</FieldError>*/}
            </Field>
            <Field>
              <FieldLabel htmlFor="postcode">Postcode</FieldLabel>
              <Input id="postcode" autoComplete="off" placeholder="2025" />
              {/*<FieldError>Choose another username.</FieldError>*/}
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                autoComplete="off"
                placeholder="Describe your garden or your goals"
                className="leading-6 min-h-[4lh]"
              />
              {/*<FieldError>Choose another username.</FieldError>*/}
            </Field>
          </FieldGroup>
        </FieldSet>
        <div className="pt-4 w-fit ml-auto">
          <ButtonBevel className="ml-auto">Send Message</ButtonBevel>
        </div>
      </div>
    </form>
  );
};
