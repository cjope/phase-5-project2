# no :token for image upload
Rails.application.config.filter_parameters += [
  :passw, :secret, :_key, :crypt, :salt, :certificate, :otp, :ssn
]
