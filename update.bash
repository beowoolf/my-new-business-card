#!/bin/bash

# mkdir -p ~/bin && ln -fs /usr/local/bin/node16 ~/bin/node && ln -fs /usr/local/bin/npm16 ~/bin/npm && source $HOME/.bash_profile
# mkdir -p ~/bin && ln -fs /usr/local/bin/node18 ~/bin/node && ln -fs /usr/local/bin/npm18 ~/bin/npm && source $HOME/.bash_profile
# mkdir -p ~/bin && ln -fs /usr/local/bin/node20 ~/bin/node && ln -fs /usr/local/bin/npm20 ~/bin/npm && source $HOME/.bash_profile
# mkdir -p ~/bin && ln -fs /usr/local/bin/node22 ~/bin/node && ln -fs /usr/local/bin/npm22 ~/bin/npm && source $HOME/.bash_profile
mkdir -p ~/bin && ln -fs /usr/local/bin/node24 ~/bin/node && ln -fs /usr/local/bin/npm24 ~/bin/npm && source $HOME/.bash_profile
git pull && cd ~/cloned/pawel-wilczek.mojezapiski.pl/pw-frontend && yarn && yarn build && devil www restart pawel-wilczek.mojezapiski.pl
