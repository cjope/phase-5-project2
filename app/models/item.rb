class Item < ApplicationRecord
    
    def extended_date
        t = self.ext_type
        r = self.receive_date
        e = self.extension
        if t == 1
            r + e.days
        elsif t == 2
            r + e.weeks
        elsif t == 3
            r + e.months
        elsif t == 4
            r + e.years
        end  
    end

    def timeframe
        t = self.ext_type
        e = self.extension.to_s
        if t == 1
            e + " day".pluralize(e)
        elsif t == 2
            e + " week".pluralize(e)
        elsif t == 3
            e + " month".pluralize(e)
        elsif t == 4
            e + " year".pluralize(e)
        end  
    end




end