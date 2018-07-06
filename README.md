# TalkingCoachEPVA34
This repository contains the combined work of EPVA3 and EPVA4's context projects for the TUDelft. 
The product is an extension of the original TalkingCoach project (https://github.com/ruuddejong/TalkingCoach).

## EPVA3 
EPVA3 has added body animation based on emotion.

### EPVA3 members:
- Mark Acda
- Pieter Tolsma
- Thomas Boss
- Jeroen Nelen
- Toon de Boer

## EPVA4
EPVA4 has added mouth animation based on speech.

### EPVA4 members:
- Emma Sala
- Erik Mekkes
- Joshua Slik
- Lucile Nikkels
- Muhammed Imran Özyar


As this repository is a merge effort / mirror of two separate repositories from GitLab the full git history is not available here.

## Live demonstration pages
A live version of this work can be viewed at :
http://mmi.tudelft.nl - see /website/client for the source code of this web client

A more basic version with demo functions and https support can be viewed at :
https://test.emekkes.nl/EPVA34 - see /website/client/public/unity for the source code of this webpage



## Server Setup
A zip file with all the required components to set up a server for this product has been included as talkingcoach_server_setup.zip.

It includes a readme that describes the general structure / installation of the server, and a full install guide with included isntallation script for linux.

## Large File Support
This repository makes use of git Large File Storage due to GitHub's 100MB file size limit.

currently the only file tracked by git lfs is InteractiveAvatar/Assets/Animations/walk_into_screen.anim at 134MB
recommended to avoid git lfs as much as possible as it is very slow.

for information on how to use git lfs:
see https://git-lfs.github.com/
and https://github.com/git-lfs/git-lfs/wiki/Tutorial#migrating-existing-repository-data-to-lfs

the original repo was converted to lfs using the following tool : https://github.com/bozaro/git-lfs-migrate
