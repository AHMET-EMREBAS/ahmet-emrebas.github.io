import {
  BooleanOptions,
  NumberOptions,
  StringOptions,
} from './property-options';

export class CommonProperties {
  static Name(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Name',
      icon: 'info',
      minLength: 3,
      maxLength: 30,
      defaultValue: 'defaultname',
      ...options,
    };
  }

  static Question(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Question',
      icon: 'question_mark',
      minLength: 3,
      maxLength: 400,
      defaultValue: 'defaultquestion',
      ...options,
    };
  }

  static Description(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Description',
      icon: 'description',
      minLength: 3,
      maxLength: 400,
      defaultValue: 'default description',
      ...options,
    };
  }

  static Currency(options?: Partial<NumberOptions>): NumberOptions {
    return {
      type: 'number',
      autocomplete: 'off',
      icon: 'money',
      defaultValue: 0,
      ...options,
    };
  }

  static Integer(options?: Partial<NumberOptions>): NumberOptions {
    return {
      type: 'number',
      autocomplete: 'off',
      icon: 'numbers',
      defaultValue: 0,
      ...options,
    };
  }

  static Message(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Message',
      icon: 'message',
      minLength: 3,
      maxLength: 1000,
      defaultValue: 'default message',
      ...options,
    };
  }
  static FirstName(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'given-name',
      label: 'First Name',
      icon: 'person',
      minLength: 2,
      maxLength: 30,
      defaultValue: 'default first name',
      ...options,
    };
  }

  static LastName(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'family-name',
      label: 'Last Name',
      icon: 'person',
      minLength: 2,
      maxLength: 30,
      ...options,
    };
  }

  static MiddleName(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Middle Name',
      icon: 'person',
      minLength: 1,
      maxLength: 30,
      nullable: true,
      defaultValue: 'default last name',
      ...options,
    };
  }

  /**
   * Email
   * @param options
   * @returns
   */
  static Email(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'email',
      inputType: 'text',
      stringFormat: 'email',
      label: 'Email',
      icon: 'email',
      defaultValue: 'aemrebasus@gmail.com',
      ...options,
    };
  }

  static Password(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'new-password',
      label: 'Password',
      stringFormat: 'password',
      inputType: 'password',
      icon: 'password',
      defaultValue: 'Password!@1341F',
      ...options,
    };
  }

  static Phone(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'mobile tel',
      inputType: 'text',
      stringFormat: 'phone',
      label: 'Phone',
      icon: 'phone',
      defaultValue: '8889892233',
      ...options,
    };
  }

  static Url(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      label: 'Url',
      stringFormat: 'url',
      inputType: 'url',
      icon: 'web',
      defaultValue:
        'https://ahmet-emrebas.github.io/assets/icons/icon-72x72.png',
      ...options,
    };
  }

  static City(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'on',
      inputType: 'text',
      label: 'City',
      minLength: 2,
      maxLength: 30,
      icon: 'location_city',
      defaultValue: 'Houston',
      ...options,
    };
  }

  static State(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'on',
      label: 'State',
      inputType: 'text',
      minLength: 2,
      maxLength: 30,
      icon: 'flag',
      defaultValue: 'Texas',
      ...options,
    };
  }

  static Street(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'street-address',
      inputType: 'text',
      label: 'Street',
      minLength: 2,
      maxLength: 50,
      icon: 'streetview',
      defaultValue: '13333 Alderson st',
      ...options,
    };
  }

  static Zip(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'postal-code',
      inputType: 'text',
      label: 'Zip',
      minLength: 4,
      maxLength: 10,
      icon: 'my_location',
      defaultValue: '44444',
      ...options,
    };
  }

  static Article(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      autocomplete: 'off',
      inputType: 'texteditor',
      label: 'Article',
      maxLength: 2000,
      icon: 'article',
      defaultValue: 'some article content',
      ...options,
    };
  }

  static Image(options?: Partial<StringOptions>): StringOptions {
    return {
      type: 'string',
      inputType: 'image',
      label: 'Select Image',
      icon: 'image',
      defaultValue: 'imagedata',
      ...options,
    };
  }

  static Like(options?: BooleanOptions): BooleanOptions {
    return {
      type: 'boolean',
      inputType: 'likebutton',
      label: 'Like',
      defaultValue: true,
      ...options,
    };
  }
}
