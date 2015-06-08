# Handlebars User Helpers

At Taplytics, we use these helpers (on top of a few approved default Handlebars helpers) within our Push Notification system.


Helpers
--------------------

### {{default [value] [defaultValue]}}

A quick way around making sure you don't send empty strings inside your notifications. By using `default`, you can make sure in case data is missing – you'll still send a great notification to your users.

#### Arguments

1. `value (any type)`: Value to return.
2. `defaultValue (any type)`: Value to return, if `value` is `null` or `undefined`.

#### Returns

(Object): Returns `value`, unless it's `null` or `undefined`. Otherwise, returns `defaultValue`

#### Example

```handlebars

Hey {{default user.name 'there'}}!

// If user.name is null, it renders to: Hey there!
// If user.name exists, it renders to: Hey John Smith!
```

### {{first_name defaultValue}}

The user's first name. This requires you to have sent us information about the user either as a `first_name` attribute when setting User Attributes or have set a `name` on the user.


#### Arguments

1. `defaultValue (any type)`: Value to return, if no `first_name` or `name` attributes are found on the user.

#### Returns

(Object): Returns user's `first_name` based on User Attributes. If it doesn't exist, it returns the `defaultValue` argument (or null if none is provided).

#### Example

```handlebars

Hey {{first_name 'there'}}!

// If user.first_name and user.name are null, then it renders to: Hey there!
// If user.name or user.name exist, then it renders to: Hey John!
```


### {{last_name defaultValue}}

The user's last name. This requires you to have sent us information about the user either as a `last_name` attribute when setting User Attributes or have set a `name` on the user.


#### Arguments

1. `defaultValue (any type)`: Value to return, if no `last_name` or `name` attributes are found on the user.

#### Returns

(Object): Returns user's `last_name` based on User Attributes. If it doesn't exist, it returns the `defaultValue` argument (or null if none is provided).

#### Example

```handlebars

Hey {{last_name 'there'}}!

// If user.last_name and user.name are null, then it renders to: Hey there!
// If user.last_name or user.name exist, then it renders to: Hey Smith!
```

### {{name defaultValue}}

The user's full name. This requires you to have sent us information about the user either as a `first_name`/`last_name` attribute when setting User Attributes or have set a `name` on the user.


#### Arguments

1. `defaultValue (any type)`: Value to return, if no `first_name`/`last_name` or `name` attributes are found on the user.

#### Returns

(Object): Returns user's `name` based on User Attributes. If it doesn't exist, it returns the `defaultValue` argument (or null if none is provided).

#### Example

```handlebars

Hey {{name 'there'}}!

// If user.first_name/user.last_name and user.name are null, then it renders to: Hey there!
// If user.first_name/user.last_name or user.name exist, then it renders to: Hey John Smith!
```

### {{email defaultValue}}

The user's email. This requires you to have identified the user with an `email`.


#### Arguments

1. `defaultValue (any type)`: Value to return, if no `email` attribute is found on the user.

#### Returns

(Object): Returns user's `email` based on User Attributes. If it doesn't exist, it returns the `defaultValue` argument (or null if none is provided).

#### Example

```handlebars

Hey {{email 'there'}}!

// If user.email is null, then it renders to: Hey there!
// If user.email exists, then it renders to: Hey nima@taplytics.com!
```

